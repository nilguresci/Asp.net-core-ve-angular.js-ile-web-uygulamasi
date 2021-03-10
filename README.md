# Kurulum

## Client kurulum

Cmd ile client dosyasını indirdiğiniz konuma geliniz. Aşağıdaki komutu çalıştırarak gerekli dosyaları yükleyiniz.

```cmd
npm install
```

## Server kurulum

SoftwareArge_Assignment dosyası içerisindeki appsettings.json dosyasının içinde bulunan connection string içerisindeki 'DataSource=SqlServerName' kısmını kendi bilgisayarınızda ki SqlServer Name ile değiştiriniz:

```json
"SoftwareArgeCon": "Data Source=.\\SQLExpress;Initial Catalog=SoftwareArge_Assignment; Integrated Security=true"

```

## Database kurulum

Database/SoftwareArge_Assignment.bak dosyasını SQL Server'ınıza kurunuz.

# Projeyi başlatma

## Server

Software*Arge*\Asp.net-core-ve-angular.js-ile-web-uygulamasi\SoftwareArge_Assignment\SoftwareArge_Assignment\bin\Debug\netcoreapp3.1\SoftwareArge_Assignment.exe

dosyasını çalıştırarak backendi çalıştırınız.

## Client

Cmd ile client dosyasının bulunduğu dizine geliniz. Ve aşağıda ki komudu çalıştırınız.

```cmd
ng serve -open
```

# Kullanım

Karşınıza direkt olarak giriş ekranı açılmalı.

Kullanıcı adı: admin

Şifre:12345

Giriş yaptıktan sonra sistemde var olan müştereleri gösteren sayfa açılacak. Bu sayfada her bir müşterini özet bilgisi gösterilmekte. İlgili butona tıklayarak müşteri detay sayfasına gidebilirsiniz. Yine ilgili butonla müşteri bilgileri güncelleme sayfasına gidebilirsiniz.

Müşteri detay sayfasında müşterinin diğer bilgileri yer almakta. Bu sayfada ilgili butonlar ile müşteriyi sistemden silebilir yada güncelleme sayfasına gidebilirsiniz.

Navbar da bulunan 'Add customer' butonuna tıklayarak yeni müşteri ekleyebilirsiniz.

Sistemden çıkışı navbar da bulunan 'Logout' butonuna tıklayarak yapabilirsiniz.

## License

[MIT](https://choosealicense.com/licenses/mit/)
