import React from 'react'

function BlogLayout({children} : {children: React.ReactNode}) {
  return (
    <div>
        <h3>This is BlogLayout</h3>
      {children}
    </div>
  )
}

export default BlogLayout
