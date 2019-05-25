/**
 * @param inputs {Object}
 * inputs.distance {Number}：行驶里程（单位：km），按里程收取distance fare
 * 2公里（base distance）以内收起步价（base fare）6元
 * 2-8公里（normal distance）按公里计价，每公里0.8元
 * 8公里以上（exceeding distance）按公里计价，每公里1.2元
 * inputs.parkTime {Number}：停车等待时长（单位：分钟）
 * 按等待时长加收park fare，每分钟0.25元
 * @return {Number} 总费用（单位：元），四舍五入取整
 */
module.exports = function main(inputs) {

    return Math.round(distanceFare(inputs.distance) + parkFare(inputs.parkTime));

    function distanceFare(distanceKm) {
        let baseFare = 6;
        return baseFare + normalDistance(distanceKm) * 0.8;
    }

    function parkFare(parkTimeMin) {
        return parkTimeMin * 0.25;
    }

    function normalDistance(distanceKm) {
        if (distanceKm <= 2) {
            return 0;
        }

        if (distanceKm <= 8) {
            return distanceKm - 2;
        }

        return distanceKm - 8;
    }
};