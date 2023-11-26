$(document).ready(function(){

    class Book{
        constructor(title, author, isbn){
            this.title= title;
            this.author= author;
            this.isbn= isbn;
        }
    }

    $('#btn').click(function(){
        let title = $('#title').val()
        let author = $('#author').val()
        let isbn = $('#isbn').val()
        // let newBook = new Book(title, author, isbn);
        let tbody=$('tbody')
        let value = `
        <tr>
            <th scope="row">
                <button class="btn btn-outline-primary py-0">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </th>
            
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            </tr>`
            // <td>${newBook.title}</td>w
            // <td>${newBook.author}</td>
            // <td>${newBook.isbn}</td>
        tbody.append(value)
        $('#title').val(null)
        $('#author').val(null)
        $('#isbn').val(null)
    })

    
    $('button').click(function(){
        $(this).parent().parent().hide();
    })

}); 