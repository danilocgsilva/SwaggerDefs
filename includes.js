let indexString = `
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

let showString = `
/**
 * @OA\Get(
 *         tags={"%"},
 *         path="%",
 *         summary="%",
 *         description="%",
 *         security={{"passport": {}}},
 *         @OA\Parameter(
 *             name="%",
 *             description="%",
 *             required=%,
 *             in="%"
 *         ),
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

 module.exports = { indexString, showString };
