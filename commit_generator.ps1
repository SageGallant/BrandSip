# Array of meaningful commit messages for a web application project
$commit_messages = @(
    "Initial project setup and configuration"
    "Add basic homepage layout"
    "Create responsive navigation bar"
    "Implement dark mode toggle functionality"
    "Add footer with company information"
    "Create products page skeleton"
    "Add contact form component"
    "Implement form validation for contact form"
    "Create hero section for homepage"
    "Add animation effects to homepage elements"
    "Create about section with company history"
    "Implement responsive design for mobile devices"
    "Add industries page with grid layout"
    "Create product detail page template"
    "Add testimonials carousel component"
    "Implement image optimization for faster loading"
    "Create loading spinner component"
    "Add error handling for API requests"
    "Create card component for product listings"
    "Implement filtering system for products"
    "Add search functionality to navigation"
    "Create FAQ accordion component"
    "Implement contact information section"
    "Add social media integration"
    "Create investors page with financial data"
    "Improve SEO metadata across all pages"
    "Add analytics tracking setup"
    "Create vision page with company goals"
    "Implement lazy loading for images"
    "Add cookie consent banner"
    "Create modal component for notifications"
    "Implement breadcrumb navigation"
    "Add custom 404 error page"
    "Create dropdown menu for navigation items"
    "Improve accessibility across all components"
    "Add meta descriptions for SEO"
    "Create terms and privacy policy pages"
    "Implement smooth scroll behavior"
    "Add icons to navigation menu items"
    "Create tooltip component for UI elements"
    "Implement responsive tables for data display"
    "Add pagination for product listings"
    "Create blog post template"
    "Implement tag filtering for blog posts"
    "Add newsletter subscription form"
    "Create responsive grid system"
    "Implement localStorage for user preferences"
    "Add progress bar component"
    "Create notification system"
    "Fix cross-browser compatibility issues"
)

# Start date - March 22, 2025
$startDate = Get-Date -Year 2025 -Month 3 -Day 22
# End date - April 8, 2025
$endDate = Get-Date -Year 2025 -Month 4 -Day 8

# Calculate the total duration in seconds
$totalDuration = ($endDate - $startDate).TotalSeconds

# Generate 50 commits with dates between March 22, 2025 and April 8, 2025
for ($i = 0; $i -lt 50; $i++) {
    # Calculate a timestamp within the range
    # We'll distribute the commits across this range
    $offset = [int]($i * $totalDuration / 50)
    
    # Calculate current commit date
    $commitDate = $startDate.AddSeconds($offset)
    
    # Format date for Git (ISO 8601 format)
    $gitDate = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    # Get a commit message
    $message = $commit_messages[$i]
    
    # Make a small change to a file (creating if it doesn't exist)
    Add-Content -Path "commit_history.txt" -Value "Update $i - $($commitDate.ToString('yyyy-MM-dd'))"
    
    # Stage the change
    git add commit_history.txt
    
    # Commit with specific date
    $env:GIT_COMMITTER_DATE = $gitDate
    git commit --date="$gitDate" -m $message
    
    Write-Host "Created commit $($i+1)/50: $message (date: $gitDate)" -ForegroundColor Green
}

Write-Host "Done! 50 commits created between March 22, 2025 and April 8, 2025." -ForegroundColor Cyan 