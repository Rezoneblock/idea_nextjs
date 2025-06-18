// import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
	// const session = await auth();
	return (
		<>
			<header className="py-5 px-4 bg-bgsecondary shadow-sm font-work-sans">
				<div className="container mx-auto">
					<nav className="flex justify-between items-center">
						<Link href="/" className="flex items-center gap-4">
							<Image
								src="/logo.png"
								alt="logo"
								width={48}
								height={48}
							/>
							<span className="text-white font-bold text-2xl">
								Главная
							</span>
						</Link>

						<Image
							src="/icons/burger-menu.svg"
							alt="menu"
							width={26}
							height={19}
						></Image>
					</nav>
				</div>
			</header>

			<main className="px-4 py-10 bg-bgprimary">
				<div className="container mx-auto">
					<Image
						className="rounded-2xl border-[color:var(--bordercolor)]/80 border-1"
						src="/hero/hero.jpg"
						alt="hero"
						width={920}
						height={814}
					></Image>
					<h1 className="text-2xl mb-4 mt-14">
						<span className="italic">&lt;h1&gt;</span> <br />
						Предположим, тут текст, который заставит тебя купить
						здесь квартиру. <br />
						<span className="italic">&lt;/h1&gt;</span>
					</h1>
					<p>
						<span className="italic">&lt;p&gt;</span> <br />
						И небольшой абзац, прекрасно дополняющий заголовок.
						<br />
						<span className="italic">&lt;/p&gt;</span>
					</p>
				</div>
			</main>
		</>
	);
};

export default Navbar;
