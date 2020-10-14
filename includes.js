let indexString = `
/**
 * @OA\\Get(
 *         tags={"@tags"},
 *         path="%",
 *         summary="%",
 *         description="%",
 *         security={{"passport": {}}},
 *         @OA\\Response(
 *             response=200,
 *             description="Success"
 *         ),
 *         @OA\\Response(
 *             response="default",
 *             description="Unidentified error"
 *         )
 * )
 */`;

let showString = `
/**
 * @OA\\Get(
 *         tags={"@tags"},
 *         path="%",
 *         summary="%",
 *         description="%",
 *         security={{"passport": {}}},
 *         @OA\\Parameter(
 *             name="%",
 *             description="%",
 *             required=%,
 *             in="%"
 *         ),
 *         @OA\\Response(
 *             response=200,
 *             description="Success"
 *         ),
 *         @OA\\Response(
 *             response="default",
 *             description="Unidentified error"
 *         )
 * )
 */`;

let storeString = `
/**
 * @OA\\Post(
 *          tags={"%"},
 *          path="%",
 *          description="%",
 *          summary="%",
 *          security={{"passport": {}}},
 *          @OA\\RequestBody(
 *              @OA\\MediaType(
 *                  mediaType="application/json",
 *                  @OA\\Schema(
 *                      example={%}
 *                  )
 *              )
 *          ),
 *          @OA\\Response(
 *              response=201,
 *              description="Success"
 *          ),
 *          @OA\\Response(
 *              response="default",
 *              description="Undefined error"
 *          )
 * )
 */
`;

let updateString = `
/**
 * @OA\\Put(
 *         tags={"%"},
 *         path="%",
 *         summary="%",
 *         description="%",
 *         security={{"passport": {}}},
 *         @OA\\Parameter(
 *             name="%",
 *             description="%",
 *             required=%,
 *             in="%",
 *             @OA\Schema(
 *                 type="%"
 *             )
 *         ),
 *         @OA\\RequestBody(
 *              @OA\\MediaType(
 *                  mediaType="application/json",
 *                  @OA\\Schema(
 *                      example={%}
 *                  )
 *              )
 *         ),
 *         @OA\\Response(
 *             response=200,
 *             description="Success"
 *         ),
 *         @OA\\Response(
 *             response="default",
 *             description="Unidentified error"
 *         )
 * )
 */
`;

let deleteString = `
/**
 * @OA\\Delete(
 *            tags={"%"},
 *            path="%",
 *            summary="%",
 *            description="%",
 *            security={{"passport": {}}},
 *            @OA\\Parameter(
 *                name="%",
 *                description="%",
 *                required=%,
 *                in="%",
 *                @OA\\Schema(
 *                    type="%"
 *                ),
 *            ),
 *            @OA\\Response(
 *                response=200,
 *                description="Success"
 *            ),
 *            @OA\\Response(
 *                response="default",
 *                description="Unidentified error"
 *            )
 * )
 */
`;

module.exports = { 
    indexString, 
    showString, 
    storeString,
    updateString,
    deleteString
};