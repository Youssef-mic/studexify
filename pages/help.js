import Link from "next/link"
export default function Help(){
	return(
		<div className="p-5 text-center">

			<h1 className="text-3xl">Welcome to Studexify</h1>
			<p>
				You can: <br/>
					1. Study using the Pomodoro Technique<br/>
					2. Add tasks<br/>
					3. Get coins for every session you complete and every task you finish<br/>
					4. Purchase small treats and special rewards using those coins<br/><br/>
				The point is to make studying easy and gratifying 
			</p>
			 <Link href="./">
				<button className="bg-ultradark rounded-2xl p-3 py-2 text-mf ml-3 mt-2 text-2xl"> Back</button>
			</Link>
		</div>

	)
}