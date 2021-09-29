function Header() {
  return (
    <div class="subgrid">
      {/* Main menu "mollie." */}
      <div class="item1">
          <li><a href="index.html">mollie.</a></li>  
      </div>

      {/* Navigation bar */}
      <div class="item2">
          <li><a href="index.html">home</a></li>
          <li><a href="work.html">work</a></li>
          <li><a href="speaking.html">speaking</a></li>
          <li><a href="resume.html">resume</a></li>
          <li><a href="blog.html">blog</a></li> 
      </div>

      {/* Main menu "say hi." */}
      <div class="item3">
          <li><a href="log.html">say hi.</a></li>
      </div> 
    </div>
  )
}

export default Header;