import fs from "fs/promises";
import path from "path";

export async function deleteAllFilesInDir(dirPath) {
  try {
    const files = await fs.readdir(dirPath);

    const deleteFilePromises = files.map((file) =>
      fs.unlink(path.join(dirPath, file))
    );

    await Promise.all(deleteFilePromises);
    console.log("Temp files deleted");
  } catch (err) {
    console.log(err);
  }
}
