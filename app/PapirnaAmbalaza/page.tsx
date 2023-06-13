


export default function PapirnaAmbalaza() {
    return (
        <>

            <h1 className="text-4xl p-10 font-medium">Papirna ambalaza</h1>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-2xl font-medium p-4">Stampa na papirnoj ambalazi</h2>
                <p className="max-w-5xl p-5 text-center">Stampa na papirnoj ambalazi se vrsi u jednoj boji, a to je crna boja.
                    Ukoliko zelite da se stampa vrsi u vise boja, to je moguce, ali samo u slucaju da je kolicina velika.
                </p>
                <h2 className="text-2xl font-medium p-4">Stampa na razlicite velicine vreca</h2>
                <p className="max-w-5xl p-5 text-center">Stampa na razlicite velicine vreca se vrsi u zavisnosti od toga koliko je velika vreca.
                    Ukoliko je vreca velika, onda se stampa vrsi u jednoj boji, a ukoliko je vreca mala, onda se stampa vrsi u vise boja.
                </p>
                <h2 className="text-2xl font-medium p-4"> Stampa po narudzbini</h2>
                <p className="max-w-5xl p-5 text-center"> Stampa po narudzbini se vrsi u zavisnosti od toga koliko je velika narudzbina.
                    Ukoliko je narudzbina velika, onda se stampa vrsi u jednoj boji, a ukoliko je narudzbina mala, onda se stampa vrsi u vise boja.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl m-10">
                    Ovde pogledajte na kakvoj masini se vrsi stampa na papirnoj ambalazi:
                </p>
                <button className="bg-green-950">Saznaj vise</button>
            </div>


        </>
    )
}