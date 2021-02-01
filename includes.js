let indexString = `
/**
 * @OA\\Get(
 *         tags={"@tags"},
 *         path="@apiPath",
 *         summary="@summary-description",
 *         description="@summary-description",
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
 *         path="@apiPath/{id}",
 *         summary="@summary-description",
 *         description="@summary-description",
 *         security={{"passport": {}}},
 *         @OA\\Parameter(
 *             name="id",
 *             description="Id",
 *             required=true,
 *             in="path"
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
 *          tags={"@tags"},
 *          path="@apiPath",
 *          description="@summary-description",
 *          summary="@summary-description",
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
 *         tags={"@tags"},
 *         path="@apiPath",
 *         summary="@summary-description",
 *         description="@summary-description",
 *         security={{"passport": {}}},
 *         @OA\\Parameter(
 *             name="id",
 *             description="Id",
 *             required=true,
 *             in="path",
 *             @OA\\Schema(
 *                 type="integer"
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
 *            tags={"@tags"},
 *            path="@apiPath",
 *            summary="@summary-description",
 *            description="@summary-description",
 *            security={{"passport": {}}},
 *            @OA\\Parameter(
 *                name="id",
 *                description="Id",
 *                required=true,
 *                in="path",
 *                @OA\\Schema(
 *                    type="integer"
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