import { Mail, Phone } from "lucide-react";
import React from "react";

export default function HubungiKamiPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#2CBCC4]/10 to-white bg-white pt-12 pb-32 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-3xl font-bold text-center mb-12 text-[#063547]">Hubungi Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <form className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col gap-4">
            <label className="font-semibold text-[#063547]">Nama</label>
            <input type="text" className="border rounded px-3 py-2" placeholder="Nama Anda" required />
            <label className="font-semibold text-[#063547]">Email</label>
            <input type="email" className="border rounded px-3 py-2" placeholder="Email Anda" required />
            <label className="font-semibold text-[#063547]">Pesan</label>
            <textarea className="border rounded px-3 py-2 min-h-256" placeholder="Tulis pesan Anda di sini..." rows={5} required />
            <button type="submit" className="bg-[#2CBCC4] text-white font-bold py-2 px-4 rounded hover:bg-[#229ba1] mt-4">Kirim</button>
          </form>

          <div className="bg-[#2CBCC4] p-8 rounded-lg shadow-lg flex flex-col gap-8 justify-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Kontak</h2>
              <p className="mb-1 flex items-center text-white gap-2"><Mail className="w-5 h-5" /> Email: info@nusantaramajuluhur.com</p>
              <p className="mb-1 flex items-center text-white gap-2"><Phone className="w-5 h-5" /> Telepon: +62 859 3500 0364</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Alamat</h2>
              <p className="mb-4 flex items-center text-white gap-2">Kota Semarang, Kecamatan Pedurungan Kelurahan Palebon, Jl. Kalicari Timur I No.5, RT 005, RW 009, Jawa Tengah</p>
              <div className="w-full h-48 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d110.1234567!3d-7.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b123456789%3A0x123456789abcdef!2sJl.%20Kalicari%20Timur%20I%20No.5%2C%20Palebon%2C%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}