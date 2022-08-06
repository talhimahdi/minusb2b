import Link from "next/link";
export default function TopNavbar() {
  return (
    <div className=" bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1">
            <p className="font-medium text-secondary truncate">
              <span className="md:hidden">FRANCO DÈS 250€</span>
              <span className="hidden md:inline">
                Dès 250€ les frais de port c&apos;est cado !
              </span>
            </p>
          </div>
          <div className="flex-1 text-center">
            <Link href={"/products"}>
              <a>
                <p className="text-secondary truncate font-semibold">
                  Liste des Produits
                </p>
              </a>
            </Link>
          </div>
          <div className="flex-1 text-end sm:order-3 sm:ml-2">
            <p className="font-medium text-secondary truncate">
              <span className="md:hidden">07 84 86 49 81</span>
              <span className="hidden md:inline">
                Allô ? On est là au 07 84 86 49 81
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
