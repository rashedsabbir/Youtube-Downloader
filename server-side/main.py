from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pytube import YouTube
import os
from typing import Dict
from pydantic import BaseModel
import logging

# Initialize FastAPI app
app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO)

# Path to store downloaded videos on Windows Desktop
OUTPUT_FOLDER = r"C:\Users\USER\Desktop\youtube_video"

# Function to download a YouTube video


def download_youtube_video(url):
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()

        if not os.path.exists(OUTPUT_FOLDER):
            os.makedirs(OUTPUT_FOLDER)

        file_path = stream.download(OUTPUT_FOLDER)
        return yt.title, file_path

    except Exception as e:
        logging.error(f"Error downloading video: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.get("/")
def read_root():
    return {"message": "YouTube Video Downloader API"}


@app.get("/download/", response_class=FileResponse)
def download(url: str):
    try:
        title, file_path = download_youtube_video(url)
        return FileResponse(path=file_path, filename=os.path.basename(file_path))
    except HTTPException as e:
        raise e
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        raise HTTPException(
            status_code=500, detail="An unexpected error occurred")


class DeleteRequest(BaseModel):
    filename: str


@app.post("/delete/")
def delete_video(request: DeleteRequest):
    file_path = os.path.join(OUTPUT_FOLDER, request.filename)
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
            return {"message": f"Deleted {request.filename}"}
        else:
            raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        logging.error(f"Error deleting video: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
