let rakBuku = [
    {
        id: 123,
        title: 'the binengging',
        author: 'anonymous',
        year: 1999,
        isComplete: false
    },
    {
        id: 321,
        title: 'the beginning',
        author: 'steve',
        year: 2000,
        isComplete: true
    }
]
let buku = []
document.getElementById('buatBuku').addEventListener('submit', (event) => {
    event.preventDefault()

    rakBuku.push({
        id: +new Date(),
        title: document.getElementById('judul').value,
        author: document.getElementById('penulis').value,
        year: document.getElementById('tahun').value,
        isComplete: document.getElementById('isComplete').checked
    })

    document.dispatchEvent(new Event('renderBook'))
})

window.addEventListener('load', () => {
    document.dispatchEvent(new Event('renderBook'))
})

document.addEventListener('renderBook', () => {
    document.getElementById('belum').innerHTML = ''
    document.getElementById('sudah').innerHTML = ''
    document.getElementById('result').innerHTML = ''
    createElement()
})

document.getElementById('search').addEventListener('click', () => {
    // document.dispatchEvent(new Event('renderBook'))
    let key = document.getElementById('search-key').value
    key.toLowerCase().split(' ').join('')
    buku.map(x => {
        if (x.dataset.name == key) {
            document.getElementById('result').innerHTML = ''
            document.getElementById('result').append(x)
        }
    })
})

function createElement() {
    rakBuku.map(x => {
        // card text
        const judul = document.createElement('h3')
        judul.innerText = x.title

        const penulis = document.createElement('p')
        penulis.innerText = x.author

        const tahun = document.createElement('p')
        tahun.innerText = x.year

        const cardText = document.createElement('div')
        cardText.classList.add('card-text')
        cardText.append(judul, penulis, tahun)

        // card edit
        const newTitle = document.createElement('input')
        newTitle.setAttribute('type', 'text')
        newTitle.setAttribute('id', 'newTitle')
        newTitle.value = x.title

        const newAuthor = document.createElement('input')
        newAuthor.setAttribute('type', 'text')
        newAuthor.setAttribute('id', 'newAuthor')
        newAuthor.value = x.author

        const newYear = document.createElement('input')
        newYear.setAttribute('type', 'number')
        newYear.setAttribute('id', 'newYear')
        newYear.value = x.year

        const newComplete = document.createElement('input')
        newComplete.setAttribute('type', 'checkbox')
        newComplete.setAttribute('id', 'newSelesai')
        newComplete.checked = x.isComplete
        
        const toggleLabel = document.createElement('label')
        toggleLabel.innerHTML = 'Selesai dibaca '

        const toggleSelesai = document.createElement('div')
        toggleSelesai.classList.add('input-inline')
        toggleSelesai.append(toggleLabel, newComplete)
        
        const cardEdit = document.createElement('div')
        cardEdit.classList.add('card-edit')
        cardEdit.append(newTitle, newAuthor, newYear, toggleSelesai)
        cardEdit.style.display = 'none'

        // edit button
        const editButton = document.createElement('button')
        editButton.innerHTML = 'Edit'
        editButton.classList.add('btn-edit')

        editButton.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.style.display = 'none'
            saveButton.style.display = 'inline'
            cardText.style.display = 'none'
            cardEdit.style.display ='inline'
        })

        // save Button
        const saveButton = document.createElement('button')
        saveButton.innerHTML = 'save'
        saveButton.classList.add('btn-save')
        saveButton.style.display = 'none'

        saveButton.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.style.display = 'none'
            editButton.style.display = 'inline'
            cardText.style.display = 'inline'
            cardEdit.style.display ='none'

            saveState(x.id, newTitle.value, newAuthor.value, newYear.value, newComplete.checked)
            document.dispatchEvent(new Event('renderBook'))
        })
        

        // grouping
        const card = document.createElement('article')
        card.setAttribute('id', x.id)
        card.setAttribute('data-name', x.title.toLowerCase().split(' ').join(''))
        card.classList.add('card')
        card.append(cardText, cardEdit, editButton, saveButton)

        // buku
        buku.push(card)

        // taro ke habitat nya
        if (x.isComplete) {
            document.getElementById('sudah').append(card)
        } else {
            document.getElementById('belum').append(card)
        }
    })
}


function saveState(idTarget, newTitle, newAuthor, newYear, newComplete) {
    rakBuku.map(buku => {
        if (buku.id == idTarget) {
            buku.title = newTitle
            buku.author = newAuthor
            buku.year = newYear
            buku.isComplete = newComplete
        }
    })
}

