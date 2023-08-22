function SignIn() {


function handleSubmit(e){
e.preventDefault()
}

    return (  
<>
<main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
<img src="/img/beams-cover@95.jpg" alt="" class="absolute left-1/2 top-0 -ml-[47.5rem] w-[122.5rem] max-w-none"/>
<div class="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"><svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg></div>
        <div className="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
<h1 class="sr-only">Log in to your Tailwind UI account</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">Email</label>
                <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">Password</label>
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">Sign in to account</button>
        </form>
        </div>
        </main>
        </>
    );
}

export default SignIn;