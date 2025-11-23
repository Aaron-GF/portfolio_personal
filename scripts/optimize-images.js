import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "../public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

// Recursive function to get all files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

async function convertImages() {
  console.log("Starting image conversion...");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error("Images directory not found:", IMAGES_DIR);
    return;
  }

  const files = getAllFiles(IMAGES_DIR);
  const imageFiles = files.filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  console.log(`Found ${imageFiles.length} images to convert.`);

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const newFile = file.replace(ext, ".webp");

    try {
      await sharp(file).webp({ quality: 80 }).toFile(newFile);

      console.log(
        `Converted: ${path.relative(PUBLIC_DIR, file)} -> ${path.relative(
          PUBLIC_DIR,
          newFile
        )}`
      );

      // Optional: Delete original file? Maybe ask user first. For now, keep both.
      // fs.unlinkSync(file);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log("Conversion complete!");
}

convertImages();
