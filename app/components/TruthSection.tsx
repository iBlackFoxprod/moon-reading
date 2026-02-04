/** Truth Section
 * High-intrigue section using official assets
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TruthSection() {
    const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

    return (
        <section className="py-5 bg-dark">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 text-center animate-fade-in-up">
                        <Image
                            src="/assets/MoonReadingShockingTruth.png"
                            alt="The Shocking Truth"
                            width={500}
                            height={500}
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <h2 className="display-4 fw-800 text-gradient glow mb-4">
                            The Shocking Truth About Your <span className="text-accent">Moon Sign</span>
                        </h2>
                        <p className="fs-5 text-dim mb-4">
                            Did you know that your Moon Sign is often more indicative of your true self than your Sun Sign?
                            While your Sun Sign represents your outer personality, your Moon Sign holds the key to your subconscious habits,
                            instinctive reactions, and spiritual path.
                        </p>
                        <p className="fs-5 text-dim mb-5">
                            Unlock the secrets that have been hidden in your natal chart for decades. Most people
                            never discover this information, leaving their true potential untapped.
                        </p>
                        <Link
                            href={affiliateLink}
                            className="btn-cosmic text-decoration-none d-inline-block"
                        >
                            Reveal the Truth Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
