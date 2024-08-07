
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import yt_dlp as youtube_dl
import os
import shutil
import uvicorn
import logging
import subprocess

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Set up logging
logging.basicConfig(level=logging.INFO)

# Serve the static files in the download directory
download_folder = "/home/samsapiol/Desktop/"
app.mount("/static", StaticFiles(directory=download_folder), name="static")

def check_ffmpeg():
    """
    Check if ffmpeg is installed and accessible.
    """
    try:
        subprocess.run(['ffmpeg', '-version'], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        logging.info("ffmpeg is installed and accessible.")
    except subprocess.CalledProcessError:
        raise HTTPException(status_code=500, detail="ffmpeg is not installed or not accessible. Please install ffmpeg.")

def clear_directory(directory):
    """
    Deletes all files in the specified directory.
    """
    try:
        for filename in os.listdir(directory):
            file_path = os.path.join(directory, filename)
            if os.path.isfile(file_path):
                os.remove(file_path)
                logging.info(f"Deleted file: {file_path}")
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
                logging.info(f"Deleted directory: {file_path}")
    except Exception as e:
        logging.error(f"Failed to clear directory: {e}")

# Function to download a YouTube video
def download_youtube_video(url, output_folder):
    try:
        # Ensure ffmpeg is installed
        check_ffmpeg()

        # Clear existing files in the output folder
        clear_directory(output_folder)

        # Create YouTube DL object with options
        ydl_opts = {
            'outtmpl': os.path.join(output_folder, '%(title)s.%(ext)s'),
            'format': 'bestvideo+bestaudio/best',
            'merge_output_format': 'mp4',
            'noplaylist': True
        }

        # Ensure the output folder exists
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)

        # Download the video
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            info_dict = ydl.extract_info(url, download=True)
            video_title = info_dict.get('title', 'Unknown Title')
            logging.info(f"Downloaded: {video_title}")
        
        return video_title

    except youtube_dl.DownloadError as e:
        error_message = f"Download Error: {e}"
        logging.error(error_message)
        raise HTTPException(status_code=400, detail=error_message)
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.get("/", response_class=HTMLResponse)
def read_root():
    return """
    <html>
        <body>
            <h1>YouTube Video Downloader</h1>
            <form action="/download/" method="get">
                <label for="url">YouTube URL:</label>
                <input type="text" id="url" name="url" required>
                <input type="submit" value="Download">
            </form>
        </body>
    </html>
    """

@app.get("/download/", response_class=HTMLResponse)
def download(url: str):
    if not url:
        raise HTTPException(status_code=400, detail="URL parameter is required")

    output_folder = download_folder
    try:
        title = download_youtube_video(url, output_folder)
    except HTTPException as e:
        raise e
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred")

    # Search for .mp4 files in the specified folder
    mp4_files = [f for f in os.listdir(output_folder) if f.endswith('.mp4')]

    if not mp4_files:
        raise HTTPException(status_code=404, detail="No video files found")

    # Generate clickable links for each .mp4 file found
    links = [f'<a href="/static/{file}" download="{file}" target="_blank">{file}</a>' for file in mp4_files]

    # Generate HTML to display the clickable links
    html_content = f"""
    <html>
        <body>
            <h1>Downloaded: {title}</h1>
            <h2>Click the links below to download your video(s):</h2>
            {'<br>'.join(links)}
        </body>
    </html>
    """
    return HTMLResponse(content=html_content)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)