/** Warning Block
 * High-urgency section using official assets
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WarningBlock() {
    const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';

    return (
        <section className="py-5" style={{ background: '#120510' }}>
            <div className="container py-4">
                <div className="glass-card p-5 border-accent mx-auto" style={{ maxWidth: '900px', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-4 mb-md-0 text-center">
                            <Image
                                src="/assets/MoonReadingWarning.png"
                                alt="Urgent Warning"
                                width={200}
                                height={200}
                                className="img-fluid animate-pulse"
                            />
                        </div>
                        <div className="col-md-8">
                            <h3 className="h2 fw-800 text-accent mb-3">Wait! Don&apos;t Leave Just Yet...</h3>
                            <p className="text-dim fs-5 mb-4 readability-shadow">
                                The current lunar cycle is entering a critical phase. Leaving now means you could miss
                                the specific celestial window for your personalized reading. Most insights are only accurate
                                within the current planetary alignment.
                            </p>
                            <Link
                                href={affiliateLink}
                                className="btn-cosmic text-decoration-none d-inline-block px-5"
                            >
                                Secure My Reading Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
