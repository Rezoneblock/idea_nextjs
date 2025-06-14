import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
	const session = await auth();
	return (
		<header className="px-5 py-3 bg-primary shadow-sm font-work-sans">
			<div className="container mx-auto">
				<nav className="flex justify-between items-center">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="logo"
							width={144}
							height={60}
						/>
					</Link>

					<div className="flex items-center gap-5 text-black">
						{session && session?.user ? (
							<>
								<Link href="/startup/create" className="btn">
									<span>Создать</span>
								</Link>

								<form
									action={async () => {
										"use server";
										await signOut({ redirectTo: "/" });
									}}
								>
									<button type="submit" className="btn">
										Выйти
									</button>
								</form>

								<Link
									href={`/user/${session.user.name}`}
									className="btn"
								>
									<span>{session.user.name}</span>
								</Link>
							</>
						) : (
							<form
								action={async () => {
									"use server";
									await signIn("github");
								}}
							>
								<button type="submit" className="btn">
									Login
								</button>
							</form>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
