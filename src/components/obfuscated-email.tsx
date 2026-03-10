"use client";

import React, { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  emailKey: 'privacy' | 'support';
}

export function ObfuscatedEmail({ emailKey }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await fetch(`/api/contact?email=${emailKey}`);
        if (response.ok) {
          const data = await response.json();
          setEmail(data.email);
        } else {
          setEmail('Email non disponibile');
        }
      } catch (error) {
        console.error('Failed to fetch email:', error);
        setEmail('Email non disponibile');
      }
    };

    // Fetch after a short delay to make it slightly harder for simple bots
    const timer = setTimeout(fetchEmail, 300);
    return () => clearTimeout(timer);

  }, [emailKey]);

  if (!email) {
    return <span className="text-muted-foreground">Caricamento...</span>;
  }

  if (email === 'Email non disponibile') {
      return <span className="text-destructive">{email}</span>
  }

  return (
    <a href={`mailto:${email}`} className="text-primary hover:underline">
      {email}
    </a>
  );
}