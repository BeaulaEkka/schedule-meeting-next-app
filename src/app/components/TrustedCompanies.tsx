import React from "react";
import Image from "next/image";


export default function TrustedCompanies() {
  return (
    <div>
      <section className="text-center  text-gray-500 mt-24">
        Trusted by those companies
        <div className="flex gap-6  mt-6">
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/4OfG0A6SPKFtrKiz2vuLPq/9511d37ad8dc0d14c80b625badaeded5/Property_1_Miro.svg"
            alt="miro"
            width={110}
            height={110}
          />
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/3aOI76fPHJ2rXoJKr8J1X8/bc83614db5f299b1760cce21065f2198/Property_1_microsoft-excel.svg"
            alt=""
            width={110}
            height={110}
          />
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/51S20iDqjIQ93v3WkVsMkF/a316074ea318475105786e8d808c588e/gmail.svg"
            alt=""
            width={110}
            height={110}
          />
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/4VCGBnxidEWtUhJuqX5fcU/883c3b48b035e1ee690d77e704202d4d/Property_1_Zapier.svg"
            alt=""
            width={110}
            height={110}
          />
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/6GxHuHnVO3oaiQkLRznyrv/ed2fb4fd18f9d26aba90aed0fd86b6dc/Property_1_Zendesk.svg"
            alt=""
            width={110}
            height={110}
          />
          <Image
            src="https://images.ctfassets.net/lh3zuq09vnm2/8yQ7IpqoEPQZM6k4Lqnyz/f804488b148c3947d3eafa3cfc579a99/Property_1_Shopify.svg"
            alt=""
            width={110}
            height={110}
          />
        </div>
      </section>
    </div>
  );
}
