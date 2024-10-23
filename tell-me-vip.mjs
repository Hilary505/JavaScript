import { readdir} from 'fs/promises'
import {readFile} from 'fs/promises'
import {writeFile} from 'fs/promises'
import { join } from 'path'

// Helper function to format names as required
const formatName = (fileName) => {
  const [firstName, lastName] = fileName.split('_')
  return `${lastName} ${firstName}`
}

const processGuests = async (dirPath) => {
  try {
    // Read all files in the specified directory
    const files = await readdir(dirPath)
    const yesGuests = []

    // Process each file
    for (const file of files) {
      const filePath = join(dirPath, file)
      const fileContent = await readFile(filePath, 'utf8')
      const jsonData = JSON.parse(fileContent)

      // Check if the answer is 'yes' and add to the list
      if (jsonData.answer === 'yes') {
        const formattedName = formatName(file.replace('.json', ''))
        yesGuests.push(formattedName)
      }
    }
    yesGuests.sort()

    // Format the final list with numbering
    const formattedList = yesGuests.map((name, index) => `${index + 1}. ${name}`).join('\n')

    // Write the results to 'vip.txt'
    await writeFile('vip.txt', formattedList)

    return formattedList

  } catch (error) {
    console.error('Error processing guests:', error)
  }
}

// Main function to execute the script
const main = async () => {
  const [,, dirPath] = process.argv

  if (!dirPath) {
    console.error('Error: Directory path argument is required.')
    process.exit(1)
  }

  // Process the guests and write to vip.txt
  const result = await processGuests(dirPath)
  if (result === undefined) {
    console.error('No VIP guests found.')
    process.exit(1)
  }

  console.log(result)
}

// Run the script
main()
