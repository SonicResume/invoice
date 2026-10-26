
"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";
import { Link } from "@/i18n/navigation";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="border-t border-border">
            <div className="container flex flex-col items-center justify-between gap-2 py-6 pb-28 text-sm text-muted-foreground sm:flex-row xl:pb-6">
                <p>
                    {_t("footer.developedBy")}{" "}
                    <a
                        href="https://www.sonicresume.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                    >
                        SonicResume Group
                    </a>
                </p>

                <nav>
                    <Link
                        href="/guide"
                        className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                    >
                        {_t("footer.guide")}
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default BaseFooter;
