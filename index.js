let stringToSplit = `
/**
 * @OA\Get(
 *         tags={"%"},
 *         path="%",
 *         summay="%",
 *         description="%",
 *         security={{"passport": {}}},
 *         @OA\Response(
 *             response=200,
 *             description="Success"
 *         ),
 *         @OA\Response(
 *             response="default",
 *             description="Unidentified error"
 *         )
 * )
 */`;

console.log(stringToSplit);
