function getAcceleration(object) {
    // Check if force and mass are provided
    if (object.f && object.m) {
        return object.f / object.m;
    }

    // Check if change in velocity and change in time are provided
    if (object.Δv && object.Δt) {
        return object.Δv / object.Δt;
    }

    // Check if distance and time are provided
    if (object.d && object.t) {
        return (2 * object.d) / (object.t * object.t);
    }

    // If none of the required information is available
    return "impossible";
}
