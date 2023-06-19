export default function cleanFileName(fileName: string) {
  const newFile = fileName.split('.').shift()
  return newFile
}