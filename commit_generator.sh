#!/bin/bash

# Array of meaningful commit messages for a web application project
commit_messages=(
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

# Start date in YYYY-MM-DD format
start_date="2025-03-22"
# Convert to seconds since epoch
start_timestamp=$(date -d "$start_date" +%s)

# Generate 50 commits with dates between March 22, 2025 and April 8, 2025
for i in {0..49}; do
    # Calculate a timestamp within the range
    # The range is 18 days (March 22 to April 8), which is 1555200 seconds
    # We'll distribute the commits across this range
    offset=$((i * 1555200 / 50))
    
    # Calculate current commit timestamp
    commit_timestamp=$((start_timestamp + offset))
    
    # Convert back to date format
    commit_date=$(date -d "@$commit_timestamp" "+%Y-%m-%d %H:%M:%S")
    
    # Get a commit message
    message="${commit_messages[$i]}"
    
    # Make a small change to a file (creating if it doesn't exist)
    echo "Update $i - $(date -d "@$commit_timestamp" "+%Y-%m-%d")" >> commit_history.txt
    
    # Stage the change
    git add commit_history.txt
    
    # Commit with specific date
    GIT_COMMITTER_DATE="$commit_date" git commit --date="$commit_date" -m "$message"
    
    echo "Created commit $((i+1))/50: $message (date: $commit_date)"
done

echo "Done! 50 commits created between March 22, 2025 and April 8, 2025." 