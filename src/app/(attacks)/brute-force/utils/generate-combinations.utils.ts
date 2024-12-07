export function generateCombinations(
  dict: string[],
  startLen: number,
  stopLen: number
): string[] {
  let currLen: number = startLen;
  const chars: string[] = new Array(currLen);
  const indices: number[] = new Array(currLen).fill(0);
  let workingIndex: number = currLen - 1;
  const combinations: string[] = [];

  while (true) {
    // Generate string from chars array
    let combination = "";
    for (let i = 0; i < currLen; i++) {
      chars[i] = dict[indices[i]];
      combination += chars[i];
    }
    combinations.push(combination);

    // Check if all elements of indices equal length of dict - 1
    const allMaxedOut = indices.every((index) => index === dict.length - 1);

    if (allMaxedOut) {
      if (currLen < stopLen) {
        currLen++;
        chars.length = currLen;
        indices.length = currLen;
        workingIndex = currLen - 1;
        continue;
      } else {
        break;
      }
    }

    if (indices[workingIndex] < dict.length - 1) {
      indices[workingIndex]++;
    } else {
      while (workingIndex > 0 && indices[workingIndex] === dict.length - 1) {
        workingIndex--;
      }

      if (workingIndex === 0 && indices[workingIndex] === dict.length - 1) {
        if (currLen < stopLen) {
          currLen++;
          chars.length = currLen;
          indices.length = currLen;
          workingIndex = currLen - 1;
          continue;
        } else {
          break;
        }
      } else {
        indices[workingIndex]++;
        for (let j = workingIndex + 1; j < currLen; j++) {
          indices[j] = 0;
        }
        workingIndex = currLen - 1;
      }
    }
  }

  return combinations;
}
