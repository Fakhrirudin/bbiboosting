import React from "react";  
import Image from "next/image";
import VALO from '@/public/images/valorant.jpg'

export default function Ordervalo() {
    return (
        <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                    <div className="container">
                    <h2 className="h2 mb-4 text-center">Joki Valorant</h2>
                    <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={VALO} width={250} height={200} alt="MLBB" />
                    <h2>Masukkan RIOT ID</h2>
                    <div className="item-box">
                        <div className="text-xl text-black">
                        <input type="text" name="quantityItem1" placeholder="ID Pengguna" />
                        </div>
                    </div>
                    <h3>Masukkan Alamat Email</h3>
                    <div className="text-xl text-black">
                            <input type="text" name="quantityItem1" placeholder="Email" />
                        </div>
                        <h3>Pilih Rank Awal</h3>
                    <div className="flex text-xl text-black 400 mb-8">
                        <select name="startRank">
                            <option value="iron1">Iron 1</option>
                            <option value="iron2">Iron 2</option>
                            <option value="iron3">Iron 3</option>
                            <option value="bronze1">Bronze 1</option>
                            <option value="bronze2">Bronze 2</option>
                            <option value="bronze3">Bronze 3</option>
                            <option value="silver1">Silver 1</option>
                            <option value="silver2">Silver 2</option>
                            <option value="silver3">Silver 3</option>
                            <option value="gold1">Gold 1</option>
                            <option value="gold2">Gold 2</option>
                            <option value="gold3">Gold 3</option>
                            <option value="platinum1">Platinum 1</option>
                            <option value="platinum2">Platinum 2</option>
                            <option value="platinum3">Platinum 3</option>
                            <option value="diamond1">Diamond 1</option>
                            <option value="diamond2">Diamond 2</option>
                            <option value="diamond3">Diamond 3</option>
                        </select>
                        </div>
                        <h3>Pilih Rank Tujuan</h3>
                        <div className="flex text-xl text-black 400 mb-8">
                            <select name="targetRank">
                            <option value="iiron2">Iron 2</option>
                            <option value="iiron3">Iron 3</option>
                            <option value="bbronze1">Bronze 1</option>
                            <option value="bbronze2">Bronze 2</option>
                            <option value="bbronze3">Bronze 3</option>
                            <option value="ssilver1">Silver 1</option>
                            <option value="ssilver2">Silver 2</option>
                            <option value="ssilver3">Silver 3</option>
                            <option value="ggold1">Gold 1</option>
                            <option value="ggold2">Gold 2</option>
                            <option value="ggold3">Gold 3</option>
                            <option value="pplatinum1">Platinum 1</option>
                            <option value="pplatinum2">Platinum 2</option>
                            <option value="pplatinum3">Platinum 3</option>
                            <option value="ddiamond1">Diamond 1</option>
                            <option value="ddiamond2">Diamond 2</option>
                            <option value="ddiamond3">Diamond 3</option>
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