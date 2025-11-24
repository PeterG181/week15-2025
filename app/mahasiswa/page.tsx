// @ts-ignore
import { PrismaClient } from '@prisma/client';

// Kita buat tipe data manual supaya bagian map di bawah tidak error
interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
}

// @ts-ignore
const prisma = new PrismaClient();

export default async function MahasiswaPage() {
  // @ts-ignore
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>
      <ul>
        {/* Kita paksa (cast) variabel mahasiswa menjadi array Mahasiswa */}
        {(mahasiswa as unknown as Mahasiswa[]).map((mhs) => (
          <li key={mhs.id} className="mb-2 border p-2 rounded">
            {mhs.nama} - {mhs.nim} ({mhs.jurusan})
          </li>
        ))}
      </ul>
    </div>
  );
}