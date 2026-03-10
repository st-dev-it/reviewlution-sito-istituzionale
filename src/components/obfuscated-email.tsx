"use client";

import React, { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  email: string;
}

export function ObfuscatedEmail({ email }: ObfuscatedEmailProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    const [name, domain] = email.split('@');
    const obfuscated = `${name} [at] ${domain.replace(/\./g, ' [dot] ')}`;
    return <span>{obfuscated}</span>;
  }

  return (
    <a href={`mailto:${email}`} className="text-primary hover:underline">
      {email}
    </a>
  );
}