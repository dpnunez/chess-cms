'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { populate } = ctx.query;
        const entity = await strapi.db.query('api::course.course').findOne({
            where: { slug: id },
            populate: ['cover']
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
