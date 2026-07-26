// Строит компактный список номеров страниц с многоточиями для больших диапазонов,
// напр. currentPage=5, totalPages=20 → [1, '...', 4, 5, 6, '...', 20]
export function getPaginationRange(currentPage, totalPages, siblingCount = 1) {
  const totalNumbers = siblingCount * 2 + 5; // первая + последняя + текущая + 2*соседи + 2*многоточие

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + siblingCount * 2;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis-right', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + siblingCount * 2;
    const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
    return [1, 'ellipsis-left', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, 'ellipsis-left', ...middleRange, 'ellipsis-right', totalPages];
}
