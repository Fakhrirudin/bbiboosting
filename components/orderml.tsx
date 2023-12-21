import React from "react";  
import Image from "next/image";
import MLBB from '@/public/images/mlbb.jpg'

export default function Orderml() {
    return (
        <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                    <div className="container">
                    <h2 className="h2 mb-4 text-center">Joki MLBB</h2>
                    <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={MLBB} width={250} height={200} alt="MLBB" />
                    <h2>Masukkan ID</h2>
                    <div className="item-box">
                        <div className="item">
                        <input type="text" name="quantityItem1" placeholder="ID Pengguna" />
                        <input type="text" name="quantityItem2" placeholder="Server" />
                        </div>
                    </div>
                    <h3>Masukkan Alamat Email</h3>
                    <div className="item">
                            <input type="text" name="quantityItem1" placeholder="Email" />
                        </div>
                        <h3>Pilih Rank Awal</h3>
                    <div className="flex text-xl text-black 400 mb-8">
                        <select name="startRank">
                            <option value="epic1">Epic 1</option>
                            <option value="epic2">Epic 2</option>
                            <option value="epic3">Epic 3</option>
                            <option value="epic4">Epic 3</option>
                            <option value="epic5">Epic 3</option>
                            <option value="legend1">Legend 1</option>
                            <option value="legend2">Legend 2</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                        </select>
                        </div>
                        <h3>Pilih Rank Tujuan</h3>
                        <div className="flex text-xl text-black 400 mb-8">
                            <select name="targetRank">
                            <option value="epic2">Epic 2</option>
                            <option value="epic3">Epic 3</option>
                            <option value="epic4">Epic 3</option>
                            <option value="epic5">Epic 3</option>
                            <option value="legend1">Legend 1</option>
                            <option value="legend2">Legend 2</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                            </select>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#">Checkout</a>
                        </div>
                </div>
                </div>
                </div>
        </section>
    )
}