'use strict';

/**
 * analysis controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::analysis.analysis', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::analysis.analysis').findOne({
            where: { slug: id }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
