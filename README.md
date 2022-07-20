# bookSelf

tutorial
    buat nambah buku
        isi input form (judul, penulis, tahun)
        terus klik "Tambah" di bawahnya
        nanti dibuatin object, dimasukin ke array
        nanti setiap arraynya bakal dibuatin element terus di simpen di array lain

    cari buku
        inputnya di toLowerCase() terus di hapus spasinya pake .split(' ')
        setiap buku yang dah jadi element punya attribute data-name

    edit buku
        klik aja tombol "Ubah" di card atas kanan
        ntar pake id buat looping pake Array.map(), cocokin ID nya terus ganti pake input value
        terus di render

    hapus buku
        ngambil id nya dari value attribute id
        abis tu pake for...of buat cari indexnya terus hapus pake Array.splice()

Source
    color pallets
        https://colorhunt.co/palette/f5f0bbc4dfaa90c8ac73a9ad

saya dah terapin sebelumnya di todolist saya jadi ngerjainnya cepet karna dah tau apa yang harus dilakuin
    todo saya https://mcwooden.github.io/todo/