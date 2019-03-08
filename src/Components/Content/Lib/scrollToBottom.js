export default dom =>
  dom.scroll({
    top: dom.scrollHeight,
    behavior: 'smooth'
  });
