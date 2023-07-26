import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  api_secret: process.env.C_API_SECRET,
  api_key: process.env.C_API_KEY,
  cloud_name: process.env.C_CLOUD_NAME,
  secure: true,
});

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
};

export async function uploadImage(filesPaths) {
  try {
    const resp = await (
      await cloudinary.uploader.upload(filesPaths, {
        ...options,
        transformation: { quality: 20, crop: "scale" },
      })
    ).url;
    console.log("Temp files uploaded");
    return resp;
  } catch (error) {
    console.log(error);
  }
}
