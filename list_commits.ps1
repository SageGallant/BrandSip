# PowerShell script to list the most recent 50 commits
$commits = git log -n 50 --pretty=format:"%h|%s|%ad" --date=format:'%Y-%m-%d'

Write-Host "List of the 50 most recent commits:" -ForegroundColor Cyan
Write-Host "---------------------------------" -ForegroundColor Cyan
Write-Host ""

$commits | ForEach-Object {
    $parts = $_ -split '\|'
    $hash = $parts[0]
    $message = $parts[1]
    $date = $parts[2]
    
    Write-Host "$hash" -ForegroundColor Yellow -NoNewline
    Write-Host " - " -NoNewline
    Write-Host "$message" -ForegroundColor Green -NoNewline
    Write-Host " [" -NoNewline
    Write-Host "$date" -ForegroundColor Magenta -NoNewline
    Write-Host "]"
}

Write-Host ""
Write-Host "Total of 50 commits displayed." -ForegroundColor Cyan 