'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function IPagination({ path, totalPages }: { path: string, totalPages: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] =
        useState(Number(searchParams.get('page')) || 1);
    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(1);
        params.set('page', currentPage.toString());
        router.push(path + '?' + params.toString());
    }, [currentPage, path, router]);

    return (
        <>
            <Pagination page={currentPage} total={totalPages} onChange={setCurrentPage}></Pagination>
        </>
    );
}
