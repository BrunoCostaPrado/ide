import { deleteAsync } from "del"

const delFolder = await deleteAsync(["./types", "build"])
console.log("Deleted directories:\n", delFolder.join("\n"))
