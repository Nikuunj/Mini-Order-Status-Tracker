'use client'

import React from "react";
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/MakeOrder">Go to Make Order</Link>
          </li>
          <li>
            <Link href="/OrderReceiver">Go to Order Receiver</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
