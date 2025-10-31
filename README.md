# 📱 Tugas Automation Testing - Appium Mobile

Project ini menggunakan Appium dan WebDriverIO untuk menguji aplikasi Android secara otomatis. Test dijalankan pada emulator Android dengan konfigurasi yang sesuai untuk membuka aplikasi `ApiDemos`.

---

## ✅ Struktur Project

```
appium_mobile/
├── test/                  # Folder berisi test script
│   └── appdemo.test.js    # Script pengujian Appium
├── .gitignore             # File pengecualian Git
├── README.md              # Dokumentasi project
├── package-lock.json      # Lock file npm
├── package.json           # Dependency dan script
└── wdio.conf.cjs          # Konfigurasi WebDriverIO
```

---

## 🔧 Konfigurasi Appium

- **Platform**: Android
- **Device Name**: emulator-5554
- **Platform Version**: 11
- **Automation Name**: UiAutomator2
- **App Package**: `io.appium.android.apis`
- **App Activity**: `.ApiDemos`

---

## 🚀 Cara Menjalankan Test

1. Pastikan Appium Server aktif di `localhost:4723`
2. Pastikan emulator sudah berjalan dan APK `ApiDemos` sudah terinstal
3. Jalankan perintah berikut di terminal:
   ```bash
   npm run test
   ```

---

## ✅ Hasil Test

Test berhasil dijalankan dengan output:
```
✓ coba test buka aplikasinya
Spec Files: 1 passed, 1 total (100% completed)
```

---

## 📸 Screenshot

Lampirkan screenshot berikut:
- Terminal hasil test
- Struktur folder project di VS Code
- Tampilan emulator saat aplikasi `ApiDemos` terbuka
- Halaman repository GitHub

---

## 🔗 Link Repository

[Klik di sini untuk melihat repository](https://github.com/chepsneo/Tugas-Automation-Testing---Appium-Mobile)

---

## 📄 Panduan PDF Submission

Susun PDF dengan urutan berikut:
1. **Halaman 1**: Judul, Nama, Kelas
2. **Halaman 2**: Link GitHub
3. **Halaman 3**: Screenshot hasil test
4. **Halaman 4**: Struktur folder project
5. **Halaman 5**: Tampilan emulator


