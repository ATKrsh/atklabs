$outDir  = "e:\workspace\atklabs\out"
$zipPath = "e:\workspace\atklabs\atklabs_upload.zip"

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

# Exclude all large binary asset folders - only pack HTML/CSS/JS/_next
$files = Get-ChildItem -Path $outDir -Recurse -File | Where-Object {
    $_.FullName -notlike "*\media_all\*" -and
    $_.FullName -notlike "*\media\*"     -and
    $_.FullName -notlike "*\downloads\*"
}

Write-Host "Packing $($files.Count) files (HTML/CSS/JS only)..."

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')

foreach ($file in $files) {
    $entryName = $file.FullName.Substring($outDir.Length + 1).Replace('\','/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, 'Optimal') | Out-Null
}

$zip.Dispose()

$zipKB = [int]((Get-Item $zipPath).Length / 1KB)
Write-Host "ZIP ready: atklabs_upload.zip  ${zipKB} KB"
Write-Host "Upload to InfinityFree htdocs/ and extract there."
