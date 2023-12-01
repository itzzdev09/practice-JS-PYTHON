
import PyPDF2 as pdf

def convert_pdf_to_text(file_path):

  with open(file_path, "rb") as f:
    pdf_reader = PyPDF2.PdfFileReader(f)
    number_of_pages = pdf_reader.getNumPages()
    text = ""
    for page_number in range(number_of_pages):
      page = pdf_reader.getPage(page_number)
      text += page.extractText()
    return text

def main():

  file_path = "path/to/file.pdf"
  text = convert_pdf_to_text(file_path)
  print(text)

if __name__ == "__main__":
  main()