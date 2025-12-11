import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get environment variable CASE
const caseType = process.env.CASE

// Next.js page file path
const pageFilePath = path.resolve(__dirname, '../src/app/page.jsx')

// Read page file
try {
  let content = fs.readFileSync(pageFilePath, 'utf-8')

  // Match and replace import path
  const importPattern = /import\(['"`]\.\.\/(?:small|medium|large)\/main\.jsx['"`]\)/
  const newImportPath = `import('../${caseType}/main.jsx')`

  if (importPattern.test(content)) {
    content = content.replace(importPattern, newImportPath)

    // Write back to file
    fs.writeFileSync(pageFilePath, content, 'utf-8')

    console.log(`✅ Successfully modified Next.js entry to "../${caseType}/main.jsx"`)
  } else {
    console.log('⚠️  No matching import statement found, current content:')
    console.log(content)
  }
} catch (error) {
  console.error('❌ Error modifying file:', error.message)
  process.exit(1)
}
