$destDir = "E:\workspace\atklabs\public\media_all"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$files = Get-ChildItem -Path "E:\workspace\atklabs\ATK_DATAF" -File -Recurse | Where-Object { $_.Extension -in '.jpg','.jpeg','.png','.gif','.mp4','.mov','.webm' }
$manifest = @()
$i = 0

foreach ($f in $files) {
    $i++
    $cleanName = ($f.Name -replace '[^a-zA-Z0-9\._-]', '_')
    $uniqueName = "${i}_${cleanName}"
    $targetPath = Join-Path $destDir $uniqueName
    Copy-Item -Path $f.FullName -Destination $targetPath -Force

    $ext = $f.Extension.ToLower()
    $type = if ($ext -in '.mp4','.mov','.webm') { "video" } else { "image" }
    $sizeMb = [math]::Round($f.Length / 1MB, 2)
    $sizeStr = if ($sizeMb -lt 1) { "$([math]::Round($f.Length / 1KB, 0)) KB" } else { "$sizeMb MB" }
    $parentFolder = Split-Path (Split-Path $f.FullName -Parent) -Leaf

    $manifest += [PSCustomObject]@{
        id = $i
        title = $f.BaseName
        fileName = $uniqueName
        originalName = $f.Name
        type = $type
        category = $parentFolder
        size = $sizeStr
        src = "/media_all/$uniqueName"
    }
}

$jsonPath = "E:\workspace\atklabs\src\data\all_media.json"
$manifest | ConvertTo-Json -Depth 3 | Set-Content -Path $jsonPath -Encoding UTF8
Write-Host "Processed $($files.Count) media files."
