class BooksController < ApplicationController
  def index
    # this render is optional; if we don't explicitly render or redirect,
   # rails magic will automatically look for a corresponding index view
   # and render it
    @books = Book.all
    render :index
    # your code here
  end

  def new
    #form has already been created
    render :new
    # your code here
  end

  def create
    #book: [title: Joe, author: Joe]
    book = Book.new(book_params)

    #if save operation successful.
    if book.save
      redirect_to books_url
    end
    # your code here
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy

    #redirect to index/update index page
    #render :index
    redirect_to books_url
    # your code here
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
