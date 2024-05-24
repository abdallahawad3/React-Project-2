/**
 * Truncates a given text to a specified maximum length and appends ellipsis if the text exceeds that length.
 *
 * @param {string} tex - The text to be truncated.
 * @param {number} [maxLength=50] - The maximum length of the truncated text. Defaults to 50 if not provided.
 * @returns {string} - The truncated text with ellipsis if it exceeds the specified length, otherwise the original text.
 */

export const textSlicer = (tex: string,maxLength: number = 50)=>{

  if(tex.length > maxLength ){
    return `${tex.slice(0,maxLength)}...`;
  }else {
    return tex;
  }
}